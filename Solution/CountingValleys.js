function countingValleys(n, s) {
    let path = s;
    let c = 0;
    let l = 0;
    for (var i =0; i < path.length;i++) {
        if(path[i] == "U") {
            l++;
            
        } else if(path[i] == "D") {
            
            l--;
            if(l == -1) {
                c++;
            }
        }
    }

return c;
}

countingValleys(12,"DDUUDDUDUUUD")
//Output = 2