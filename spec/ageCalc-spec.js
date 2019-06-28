
describe (birthDate, function() {

  it (should test the input for year, month, and day) function() {
    var birthday = new birthDate(1993, 8, 7);
    expect(birthday.year).toEqual(1993);
    expect(birthday.month).toEqual(8);
    expect(birthday.day).toEqual(7);

  });
});

  it (should test mercuryAge returns the user's age on Mercury, function() {
    var birthday = new birthDate (1991, 11, 20);
    expect(birthday.mercuryAge()).toEqual(//I haven't written the function yet so how would I know?)
  }
