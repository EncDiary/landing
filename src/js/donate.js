const donateData = {
  btc: {
    address: "bc1q5zk5m3tfgw5gt84jy344n6ddx25ywz3t8s4jt6",
    qr: "bitcoin.png",
  },
  eth: {
    address: "0xe19B7704BDB65Ca1e11149f1728A740e9FE4b092",
    qr: "ethereum.png",
  },
  bnb: {
    address: "bnb15kkevtkqnplmn4upsjwyrgwkpf3ksrxhpy68sw",
    qr: "binance-coin.png",
  },
  xmr: {
    address:
      "82bEmpVCrbeWgdAmYELWG3hRbx9Xby23YBJRVaiNsubvMuR9PJRUdngQnGpS68wARGRsqT2rHDZwCF1fBBDF6avdQiUR2f6",
    qr: "monero.png",
  },
};

function onSelectDonate() {
  donateAddress.innerHTML = donateData[donateSelect.value].address;
  donateQr.src = `img/donate/${donateData[donateSelect.value].qr}`;
}

const donateSelect = document.getElementById("donate_select");
const donateAddress = document.getElementById("donate_address");
const donateQr = document.getElementById("donate_qr");

onSelectDonate();
donateSelect.addEventListener("change", onSelectDonate);
