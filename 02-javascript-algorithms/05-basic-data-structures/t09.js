//Combine Arrays with the Spread Operator

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Змініть цей рядок
    return sentence;
}

console.log(spreadOut());