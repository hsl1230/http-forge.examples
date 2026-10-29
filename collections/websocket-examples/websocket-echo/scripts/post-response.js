pm.test('handshake ok', () => pm.expect(pm.response.code).to.equal(101));
pm.test('echoed a frame', () => {
  const t = pm.response.json();
  pm.expect(t.frames.some(f => f.direction === 'in')).to.be.true;
});