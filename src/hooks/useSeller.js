import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/userSeller/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setIsSeller(data.isAdmin)
                setSellerLoading(false)
            })
        }

    }, [email])

    return [isSeller, setSellerLoading];
}


export default useSeller;