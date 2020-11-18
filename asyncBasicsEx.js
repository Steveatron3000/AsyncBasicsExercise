// ASYNC BASICS EXERCISE


function mainCourse(m, callback) {
    setTimeout(() => {
      callback(m);
    }, 1000);
  }
  
  mainCourse(`Turkey`, main1 => console.log(main1));
  

  function side(s) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // return s;
        resolve(s);
      }, 2000);
    })
  }

  side(`Stuffing`)
    .then(s1 => console.log(s1))
  

  function dessert(d) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // return d;
        resolve(d);
      }, 4000);
    });
  }
  


  async function dessertFunc(){
    const d1 = await dessert('Pumpkin Pie');
    console.log(d1);
  }
  dessertFunc();
  


  // 4
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise')
    }, 2000);
  });


  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise')
    }, 3000);
  });


  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third Promise')
    }, 4000);
  });
  
  Promise.all([p1, p2, p3])
    .then(p => console.log(p));