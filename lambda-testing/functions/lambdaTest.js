exports.handler = function(event, context) {
    if (event.key1) {
        context.succeed("hello " + event.key1);
    } else {
        context.fail("no key1");
    }
};

exports.concatenate = function(event, context) {
    console.log("Loading function")

    exports.handler = (event, context) => {
        console.log('value 1 = ', event.key1);
        console.log('value 2 = ', event.key2);
        context.succeed(event.key1 + ' ' + event.key2);
    };
}