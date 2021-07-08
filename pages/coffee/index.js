import db, {postToJSON} from "../../lib/firebase"

const Index = ({coffees}) => {
    return (
        <div>
            <h1>Coffees</h1>
            <p>{JSON.stringify(coffees)}</p>
            {/*{props.map(coffee => (*/}
            {/*    <div key={coffee.id}>*/}
            {/*        <p></p>*/}
            {/*        <br/>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
}

export async function getStaticProps() {
    const coffees = (await db.collection('coffees').get()).docs.map(postToJSON);

    return {
        props: {coffees},
        revalidate: 10
    }
}

export default Index;
