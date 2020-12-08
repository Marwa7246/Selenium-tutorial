describe ("tutorial", () => {
  it ("should explore california", () => {
    browser.url("https://explorecalifornia.org/contact.htm")
    $("#name").waitForEnabled(3000)
    $("#comments").waitForEnabled(3000)

    $("#name").setValue('marwa');
    $("#state").selectByVisibleText('Texas');
    const backpack = $("#backpack");
    browser.execute("arguments[0].scrollIntoView();", backpack);
    backpack.click();
    $("#newsletter_yes").click();

    $("#name").getValue().should.equal('marwa');
    $("#state").getValue().should.equal('TX');
    $("#backpack").isSelected().should.equal(true);
    $("#newsletter_yes").isSelected().should.equal(true);
  })
});