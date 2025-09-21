const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');

loginBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if(!name){ alert("請輸入名字"); return; }

  // 儲存名字
  localStorage.setItem('username', name);

  // 關閉 modal
  loginModal.style.display = 'none';

 
};
