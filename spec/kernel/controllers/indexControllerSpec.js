const
	sinon 			= require("sinon"),
	controller 		= require("../../../kernel/controllers/indexController");

const constructorTest = (done) => {
	const instance = controller();
	expect(instance.fileLister).not.toBe(null);
	expect(instance.path).not.toBe(null);
	expect(instance.roleCheckHandler).not.toBe(null);
	done();
};

describe("An index controller", () => {
	it("defaults its constructor arguments", constructorTest);
});