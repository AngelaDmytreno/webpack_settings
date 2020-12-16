import * as $ from 'jquery';
function createStatistics(): object {
  let counter: number = 0;
  let isDestroyed: boolean = false;
  const listener = (): number => counter++;
  $(document).on('click', listener);
  return {
    destroy() {
      $(document).off('click', listener); isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) return 'Statistics is fully destroyed.';
      return counter;
    }
  };
}
window['statistics'] = createStatistics();