function countFreq(a,n) {
    // Insert elements and their
    // frequencies in hash map.
    let hm = new Array(n);
    for(let i=0;i<hm.length;i++)
    {
        hm[i]=0;
    }
    for (let i = 0; i < n; i++)
        hm[a[i]]++;
    let cumul = 0;
       
    // traverse in the array
    for(let i = 0; i < n; i++)
    {
        // add the frequencies
        cumul += hm[a[i]];
           
        // if the element has not been
        // visited previously
        if(hm[a[i]] != 0)
        {
            document.write(a[i] + "->" + cumul+"<br>");
        }
        // mark the hash 0
        // as the element's cumulative frequency
        // has been printed
        hm[a[i]] = 0;
    }
  
}
  
// Driver Code
let a=[1, 3, 2, 4, 2, 1];
let n = a.length;
countFreq(a, n);
     