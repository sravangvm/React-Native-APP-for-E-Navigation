module.exports=function(arr)
{
    const ans=[];
    let len=arr.length;
    for(let i=0;i<len-1;i++)
    {
        var s=arr[i];
        s=s+arr[i+1];
        ans.push(s);
    }
    return ans;
}