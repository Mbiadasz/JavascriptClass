function reverse(s) {
    var rev = "";
    for (var i = 0; i < s.length; i++) {
        rev = s[i] + rev;
    }
    return rev;
}

console.log(reverse("John Smith"));