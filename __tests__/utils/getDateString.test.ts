import getDateString from 'utils/getDateString';

test('January', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`1-${day}-2019`))).toEqual(
      `Jan. ${day}, 2019`
    );
  }
});

test('February', (): void => {
  for (let day = 1; day <= 28; day++) {
    expect(getDateString(new Date(`2-${day}-2019`))).toEqual(
      `Feb. ${day}, 2019`
    );
  }
  expect(getDateString(new Date('2-29-2016'))).toEqual('Feb. 29, 2016');
});

test('March', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`3-${day}-2019`))).toEqual(
      `Mar. ${day}, 2019`
    );
  }
});

test('April', (): void => {
  for (let day = 1; day <= 30; day++) {
    expect(getDateString(new Date(`4-${day}-2019`))).toEqual(
      `Apr. ${day}, 2019`
    );
  }
});

test('May', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`5-${day}-2019`))).toEqual(
      `May ${day}, 2019`
    );
  }
});

test('June', (): void => {
  for (let day = 30; day <= 30; day++) {
    expect(getDateString(new Date(`6-${day}-2019`))).toEqual(
      `June ${day}, 2019`
    );
  }
});

test('July', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`7-${day}-2019`))).toEqual(
      `July ${day}, 2019`
    );
  }
});

test('August', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`8-${day}-2019`))).toEqual(
      `Aug. ${day}, 2019`
    );
  }
});

test('September', (): void => {
  for (let day = 1; day <= 30; day++) {
    expect(getDateString(new Date(`9-${day}-2019`))).toEqual(
      `Sep. ${day}, 2019`
    );
  }
});

test('October', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`10-${day}-2019`))).toEqual(
      `Oct. ${day}, 2019`
    );
  }
});

test('November', (): void => {
  for (let day = 1; day <= 30; day++) {
    expect(getDateString(new Date(`11-${day}-2019`))).toEqual(
      `Nov. ${day}, 2019`
    );
  }
});

test('December', (): void => {
  for (let day = 1; day <= 31; day++) {
    expect(getDateString(new Date(`12-${day}-2019`))).toEqual(
      `Dec. ${day}, 2019`
    );
  }
});
