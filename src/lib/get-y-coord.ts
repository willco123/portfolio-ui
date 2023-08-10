/**
 * Gets the Y coordinate relative to the content position within its container.
 *Returns null if either the parent or container are not defined
 */
export default function getYCoord(
  placeHolderNavRef: React.RefObject<HTMLDivElement>,
): number {
  const placeHolderNav = placeHolderNavRef.current;
  if (!placeHolderNav) throw new Error("Ref not defined");

  const placeHolderNavRect = placeHolderNav.getBoundingClientRect();
  const parentContainer = placeHolderNav.parentElement;
  if (!parentContainer) throw new Error("Ref not defined");

  const parentContainerRect = parentContainer.getBoundingClientRect();
  const yCoordinate = placeHolderNavRect.top - parentContainerRect.top;
  return yCoordinate;
}
