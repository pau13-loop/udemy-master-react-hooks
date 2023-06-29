import { useFecth } from './utils/hooks';

function Joke() {
    const { setup, punchline } = useFecth('https://official-joke-api.appspot.com/jokes/random', {});

    return (
        <div>
            <h3>Joke</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    );
}

export default Joke;