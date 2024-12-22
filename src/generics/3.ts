function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const mergedObject = merge({ name: 'Alice' }, { age: 30 });
console.log(mergedObject); 