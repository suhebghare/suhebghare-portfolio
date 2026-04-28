/**
 * Sets the document <title> and meta description for the current page.
 * Call this inside a useEffect on each page component.
 */
export function setPageMeta(title: string, description: string, canonical?: string) {
  document.title = title;

  let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (desc) desc.setAttribute("content", description);

  let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);

  let twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", title);

  let twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute("content", description);

  if (canonical) {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) link.setAttribute("href", canonical);
  }
}
