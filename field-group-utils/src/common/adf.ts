import {ADFNode} from '../types/adf';

/**
 * Breadth-first search for node with the matching type
 */
export const findAdfNode = (
  rootNode: ADFNode,
  type: string
): ADFNode | null => {
  const queue: ADFNode[] = [];
  queue.push(rootNode);

  // search the queue until it is empty
  while (queue.length > 0) {
    const currentNode = queue.shift() as ADFNode;
    if (currentNode.type === type) {
      return currentNode;
    }

    // if currentNode has child node, add it to the queue.
    if (currentNode.content) {
      currentNode.content.forEach((childNode) => queue.push(childNode));
    }
  }

  return null;
};

/**
 * Traverse the node recursively
 * @param fn Function to do something with the current node, e.g. read or mutate the node
 */
export const traverseAdfNode = (
  rootNode: ADFNode,
  fn: (node: ADFNode) => void
) => {
  fn(rootNode);
  if (rootNode.content) {
    rootNode.content.forEach((childNode) => traverseAdfNode(childNode, fn));
  }
};
