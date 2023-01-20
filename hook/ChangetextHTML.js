const ChangeTextHTML = (a) => {
    var body = a;
    var temp = document.createElement("div");
    temp.innerHTML = body;
    var sanitized = temp.textContent || temp.innerText;
    return sanitized.replace('\n', '').split('|');

}

export default ChangeTextHTML