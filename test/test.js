import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index.js'; // Ensure to use .js for ESM imports

chai.use(chaiHttp);
const { expect } = chai;

describe("Basic Test", () => {
  it("should return Hello World", (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});
