var msg = decodeURIComponent('%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%AF%B7%E6%A3%80%E6%9F%A5%E7%BD%91%E7%BB%9C%E6%88%96%E7%9B%B8%E5%85%B3%E5%B1%8F%E8%94%BD%E6%8B%A6%E6%88%AA%E6%8F%92%E4%BB%B6%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%9B%B4%E6%8D%A2%E6%B5%8F%E8%A7%88%E5%99%A8%E9%87%8D%E8%AF%95%EF%BC%81')
var readAdKey = 'VXETABLE_ADVERTISING_AGREEMENT'
var showFlag = false
function updateMsg (bEl) {
  try {
    const radv = localStorage.getItem(readAdKey)
    if (!showFlag && (!radv || radv === 'Y')) {
      showFlag = true
      if (confirm(decodeURIComponent('%E8%AF%B7%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E6%8E%A5%E5%8F%97%E8%AF%A5%E7%BD%91%E7%AB%99%E7%9A%84%E5%B9%BF%E5%91%8A%EF%BC%9F'))) {
        localStorage.setItem(readAdKey, 'Y')
        alert(decodeURIComponent('%E8%AF%B7%E5%B0%86%E5%AE%98%E7%BD%91%E5%9F%9F%E5%90%8D%E5%8A%A0%E5%85%A5%E7%9B%B8%E5%85%B3%E7%99%BD%E5%90%8D%E5%8D%95%E5%90%8E%E5%86%8D%E9%87%8D%E6%96%B0%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%EF%BC%81'))
      } else {
        localStorage.setItem(readAdKey, 'N')
      }
    }
  } catch (e) { }
  if (bEl) {
    if (bEl.textContent !== msg) {
      bEl.innerHTML = '<h1 style="text-align: center;width: 100%;padding: 2em;">' + msg + '</h1>'
    }
  }
}

var adDelay = 60000
var adTimeout = null
function checkAd () {
  var warpperEl = document.querySelector('.pagead-right');
  var bEl = document.querySelector('.page-container');
  var wwDiv = document.querySelector('.pagead-right .wwads-cn');
  var wwImgEl = document.querySelector('.pagead-right .wwads-img');
  if (!warpperEl) {
    updateMsg(bEl)
    return
  }
  if (!wwDiv) {
    updateMsg(bEl)
    return
  }
  if (!wwImgEl) {
    updateMsg(bEl)
    return
  }
  if (wwDiv && wwImgEl) {
    clearTimeout(adTimeout)
  } else {
    adDelay += 200
    adTimeout = setTimeout(checkAd, adDelay)
  }
}
adTimeout = setTimeout(checkAd, adDelay)

var hdDelay = 10000
var hdTimeout = null
function checkHide () {
  var bEl = document.querySelector('.page-container');
  var warpperEl = document.querySelector('.pagead-right');
  var wwDiv = document.querySelector('.pagead-right .wwads-cn');
  if (warpperEl) {
    warpperEl.style = 'position: fixed !important;right: 20px !important;top: 50px !important;width: 280px !important;padding: 0 !important;margin: 0 !important;z-index: 999999 !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;'
  } else {
    updateMsg(bEl)
    return
  }
  if (wwDiv) {
    wwDiv.style = "max-width: 180px !important;margin: 20px auto 0 auto !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;"
  } else {
    updateMsg(bEl)
    return
  }
  hdTimeout = setTimeout(checkHide, hdDelay)
}
hdTimeout = setTimeout(checkHide, hdDelay)