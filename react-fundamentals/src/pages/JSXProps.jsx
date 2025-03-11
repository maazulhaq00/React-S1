import Card from "../components/Card";

function JSXProps() {
    return (
        <>
            <Card
                name="Maaz Ul Haq"
                fields={
                    <div>
                        <p>You like pasta.</p>
                        <img width="200" src="https://www.southernliving.com/thmb/ucpnRJ2pBd21-FDTfwDPFnzcYgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Microwave_Pasta_008-2cdc941e066d4b5a823de5fbf334d1f4.jpg" />
                    </div>
                }
            />

            <Card
                name="Muhammad Hasnain"
                fields={
                    <table border="1">
                        <tr>
                            <th>Name
                            </th>
                            <th>
                                Marks
                            </th>
                        </tr>
                        <tr>
                            <td>OOP</td>
                            <td>78</td>
                        </tr>
                        <tr>
                            <td>ASP.NET</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Discreate Maths</td>
                            <td>68</td>
                        </tr>
                    </table>
                }
            />

            <Card
                name="Umer Mansoor"
                fields={<p>Only a para as JSX prop "field"</p>}
            >
                <h4>Hobbies</h4>
                <ul>
                    <li>Reading</li>
                    <li>Coding</li>
                    <li>Sleeping</li>
                </ul>
            </Card>

        </>

    );
}

export default JSXProps;