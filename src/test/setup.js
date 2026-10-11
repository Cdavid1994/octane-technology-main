import '@testing-library/jest-dom/vitest'

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = IntersectionObserverStub
