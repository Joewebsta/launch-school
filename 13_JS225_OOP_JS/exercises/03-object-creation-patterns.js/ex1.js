// name property added to make objects easier to identify
const foo = {name: 'foo'};

const bar = Object.create(foo);
bar.name = 'bar';

const baz = Object.create(bar);
baz.name = 'baz';

const qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  const protoChain = [];
  let currentProto = Object.getPrototypeOf(this);
  while (currentProto !== Object.prototype) {
    protoChain.push(currentProto.name);
    currentProto = Object.getPrototypeOf(currentProto)
  }
  
  protoChain.push('Object.prototype');
  return protoChain;
}

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']