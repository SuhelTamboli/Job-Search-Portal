// container/src/eventBus.js   ← ONLY in container!
const EVENT_BUS = {
  emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  },
  on(eventName, callback) {
    const handler = (e) => callback(e.detail);
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  },
  once(eventName, callback) {
    const handler = (e) => {
      callback(e.detail);
      window.removeEventListener(eventName, handler);
    };
    window.addEventListener(eventName, handler);
  },
};

// Make it globally available
window.EVENT_BUS = EVENT_BUS;

export default EVENT_BUS;
