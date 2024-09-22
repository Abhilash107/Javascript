//? Same as lower bound 

const arr = [1, 2, 3, 3, 5, 5, 6, 7]
const res = findAndInsert(arr, 4)

console.log(res);


function findAndInsert(a, x){
    let l =0
    let h = a.length -1
    let ans = a.length

    while(l <= h){

        let mid = Math.floor(l + (h -l)/2);

        if(a[mid] >= x) {
            ans = mid
            h = mid -1
        }
        else{
            l = mid +1
        }
    }
    return ans;

}