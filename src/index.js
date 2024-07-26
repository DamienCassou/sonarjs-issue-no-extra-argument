function main() {
  let update = makeUpdate();

  update("hello");
}

function makeUpdate() {
	let updateFn = () => true;

	fetchItems({
		setUpdateFn: (fn) => (updateFn = fn),
	});

	return (...args) => updateFn(...args);
}

function fetchItems({setUpdateFn}) {
  setUpdateFn((arg) => console.log(arg));
}

main()
