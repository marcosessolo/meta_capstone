export function fetchAPI(date) {
    return new Promise((resolve, reject) => {
      // simulate network delay
      setTimeout(() => {
        resolve([
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ]);
      }, 2000);
    });
  }
  
  export function submitAPI(formData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
  