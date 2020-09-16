describe("enter page", () => {
	let ciao: string;
	beforeAll(() => {
		ciao = "PROVA";
	});
	it("should enter the page correctly", async () => {
		await page.goto("https://facebook.com");
		await page.screenshot({ fullPage: true, path: __dirname + "/ciao.png" });
		expect(ciao).toBeTruthy();
	});
});
