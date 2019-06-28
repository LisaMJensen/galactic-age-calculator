
describe (birthDate, function() {

  it (should test the input for year, month, and day) function() {
    var birthday = new birthDate(1993, 8, 7);
    expect(birthday.year).toEqual(1993);
    expect(birthday.month).toEqual(8);
    expect(birthday.day).toEqual(7);

  });
});
