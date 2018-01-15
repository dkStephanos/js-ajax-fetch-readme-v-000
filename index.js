const token = 'd5a37406e38cc71a1707bc1199f0aa075f938bb7'
fetch('https://api.github.com/dkStephanos/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
