/* Formal portfolio — minimal interactions */
;(() => {
  const $ = (s, c = document) => c.querySelector(s)
  const $$ = (s, c = document) => [...c.querySelectorAll(s)]
  const root = document.documentElement

  /* Theme: follow the system, remember an explicit choice */
  const KEY = 'pro-theme'
  const saved = localStorage.getItem(KEY)
  const apply = (t) => {
    if (t === 'dark') root.dataset.theme = 'dark'
    else delete root.dataset.theme
    $('meta[name="theme-color"]').setAttribute('content', t === 'dark' ? '#141110' : '#fdfaf6')
  }
  apply(saved || 'dark')
  $('#themeToggle').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(KEY, next)
    apply(next)
  })

  /* Mobile menu */
  const menuBtn = $('#menuBtn'),
    links = $('#navLinks')
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open')
    menuBtn.setAttribute('aria-expanded', String(open))
  })
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('open')
      menuBtn.setAttribute('aria-expanded', 'false')
    }
  })

  /* Active nav link */
  const sections = $$('main section[id]')
  const navFor = Object.fromEntries($$('a', links).map((a) => [a.getAttribute('href').slice(1), a]))
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return
        $$('a', links).forEach((a) => a.classList.remove('active'))
        navFor[en.target.id]?.classList.add('active')
      })
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  sections.forEach((s) => spy.observe(s))

  /* Reveal on scroll */
  const targets = $$('.section > *:not(h2), .timeline li, .project')
  targets.forEach((el) => el.classList.add('reveal'))
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  targets.forEach((el) => io.observe(el))

  /* Projects */
  const grid = $('#projects-grid')
  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    )
  grid.innerHTML = (window.PROJECTS || [])
    .map(
      (p) => `
    <article class="project">
      <header><span class="mark" aria-hidden="true">${esc(p.title[0])}</span><h3>${esc(p.title)}</h3><span class="year">${esc(p.year)}</span></header>
      <p>${esc(p.blurb)}</p>
      <details>
        <summary>Details</summary>
        <p>${esc(p.desc)}</p>
        <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </details>
      <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      ${
        p.links.length
          ? `<div class="links">${p.links
              .map(
                (l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
              )
              .join('')}</div>`
          : ''
      }
    </article>`
    )
    .join('')
  $$('.project', grid).forEach((el) => {
    el.classList.add('reveal')
    io.observe(el)
  })

  /* Contact form → mail app */
  $('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const subject = `Portfolio enquiry from ${f.get('name')}`
    const body = `Hi Harish,\n\n${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`
    location.href = `mailto:mharishbabu8639@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  })

  /* Rotating titles — the sizer reserves the longest phrase so the layout never shifts */
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const typed = $('#typed')
  if (typed) {
    const words = JSON.parse(typed.dataset.words.replace(/&amp;/g, '&'))
    $('#typedSizer').textContent = words.reduce((a, b) => (b.length > a.length ? b : a), '')
    if (reduced) typed.textContent = words[0]
    else {
      let wi = 0,
        ci = 0,
        del = false
      const step = () => {
        const w = words[wi]
        typed.textContent = w.slice(0, ci)
        let delay = del ? 40 : 75
        if (!del && ci === w.length) {
          del = true
          delay = 1800
        } else if (del && ci === 0) {
          del = false
          wi = (wi + 1) % words.length
          delay = 350
        } else ci += del ? -1 : 1
        setTimeout(step, delay)
      }
      step()
    }
  }

  /* Count-up numbers */
  const counters = $$('[data-count]')
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return
      countIO.unobserve(en.target)
      const el = en.target,
        end = +el.dataset.count,
        suffix = el.dataset.suffix || ''
      if (reduced) {
        el.textContent = end + suffix
        return
      }
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1100)
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  })
  counters.forEach((c) => countIO.observe(c))

  /* Scroll progress + back-to-top */
  const progress = $('#progress'),
    toTop = $('#toTop')
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`
    toTop.classList.toggle('show', scrollY > 600)
  }
  addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }))

  /* Card spotlight follows the pointer */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.project, .what, .skills > div')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    })
  }

  /* Copy email + toast */
  const toast = $('#toast')
  let toastTimer
  const say = (msg) => {
    toast.textContent = msg
    toast.classList.add('show')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200)
  }
  $('#copyEmail').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('mharishbabu8639@gmail.com')
      say('Email copied')
    } catch {
      say('Copy not available here')
    }
  })

  $('#year').textContent = new Date().getFullYear()
})()
