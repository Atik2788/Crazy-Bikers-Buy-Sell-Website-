import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://crazy-bikers-server-atik2788.vercel.app/userAdmin/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                })
        }

    }, [email])

    return [isAdmin, isAdminLoading];
}


export default useAdmin;