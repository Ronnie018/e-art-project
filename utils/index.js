export function formatItemArray(items) {
  let arr = [];

  for (let i in items) {
    let pos = getPos(i);
    if (arr[pos]) arr[pos].push(items[i]);
    else arr[pos] = [items[i]];
  }
  return arr;
}

export function getPos(len) {
  return Math.floor(len / 5);
}

function isNested(link, nestBase) {
  return link.startsWith(nestBase);
}

function notRootAndIncludes(link, url) {
  return link !== '/' && url.includes(link);
}

function matchAndNotRoot(link, url) {
  return link === url || notRootAndIncludes(link, url);
}

/*
  @param state: array
  @param link: string
*/

export function changeSelected(state, url) {
  return state.map((item) => {
    if (!isNested(item.link, '/about-us') && matchAndNotRoot(item.link, url))
      return { ...item, active: true };

    if (item.link === url) return { ...item, active: true };

    return { ...item, active: false };
  });
}
