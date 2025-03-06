function Home() {
    const name = "Hasnain"
    const age = 26;
    
    
    
    return ( 
        <>
            <h1>Welcome {name}</h1>

            {
                age <=25 ? <p>You are young</p> : <p>You are old</p>
            }


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque placeat odio exercitationem qui eligendi ab voluptates beatae ad 
                voluptatum rerum tenetur, pariatur libero, labore dignissimos sint ea doloremque ducimus non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque placeat odio exercitationem qui eligendi ab voluptates beatae ad 
                voluptatum rerum tenetur, pariatur libero, labore dignissimos sint ea doloremque ducimus non.</p>
        </>
     );
}

export default Home;