import getDateTime from 'utils/getDateTime';

test('January', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`1-${day}-2019`))).toEqual(`2019-01-0${day}`);
    } else {
      expect(getDateTime(new Date(`1-${day}-2019`))).toEqual(`2019-01-${day}`);
    }
  }
});

test('February', (): void => {
  for (let day = 1; day <= 28; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`2-${day}-2019`))).toEqual(`2019-02-0${day}`);
    } else {
      expect(getDateTime(new Date(`2-${day}-2019`))).toEqual(`2019-02-${day}`);
    }
  }
  expect(getDateTime(new Date('2-29-2016'))).toEqual('2016-02-29');
});

test('March', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`3-${day}-2019`))).toEqual(`2019-03-0${day}`);
    } else {
      expect(getDateTime(new Date(`3-${day}-2019`))).toEqual(`2019-03-${day}`);
    }
  }
});

test('April', (): void => {
  for (let day = 1; day <= 30; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`4-${day}-2019`))).toEqual(`2019-04-0${day}`);
    } else {
      expect(getDateTime(new Date(`4-${day}-2019`))).toEqual(`2019-04-${day}`);
    }
  }
});

test('May', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`5-${day}-2019`))).toEqual(`2019-05-0${day}`);
    } else {
      expect(getDateTime(new Date(`5-${day}-2019`))).toEqual(`2019-05-${day}`);
    }
  }
});

test('June', (): void => {
  for (let day = 30; day <= 30; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`6-${day}-2019`))).toEqual(`2019-06-0${day}`);
    } else {
      expect(getDateTime(new Date(`6-${day}-2019`))).toEqual(`2019-06-${day}`);
    }
  }
});

test('July', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`7-${day}-2019`))).toEqual(`2019-07-0${day}`);
    } else {
      expect(getDateTime(new Date(`7-${day}-2019`))).toEqual(`2019-07-${day}`);
    }
  }
});

test('August', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`8-${day}-2019`))).toEqual(`2019-08-0${day}`);
    } else {
      expect(getDateTime(new Date(`8-${day}-2019`))).toEqual(`2019-08-${day}`);
    }
  }
});

test('September', (): void => {
  for (let day = 1; day <= 30; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`9-${day}-2019`))).toEqual(`2019-09-0${day}`);
    } else {
      expect(getDateTime(new Date(`9-${day}-2019`))).toEqual(`2019-09-${day}`);
    }
  }
});

test('October', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`10-${day}-2019`))).toEqual(
        `2019-10-0${day}`
      );
    } else {
      expect(getDateTime(new Date(`10-${day}-2019`))).toEqual(`2019-10-${day}`);
    }
  }
});

test('November', (): void => {
  for (let day = 1; day <= 30; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`11-${day}-2019`))).toEqual(
        `2019-11-0${day}`
      );
    } else {
      expect(getDateTime(new Date(`11-${day}-2019`))).toEqual(`2019-11-${day}`);
    }
  }
});

test('December', (): void => {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      expect(getDateTime(new Date(`12-${day}-2019`))).toEqual(
        `2019-12-0${day}`
      );
    } else {
      expect(getDateTime(new Date(`12-${day}-2019`))).toEqual(`2019-12-${day}`);
    }
  }
});
