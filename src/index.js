
import PubSub from 'pubsub-js';

/**
 * Publishes the topic, passing the data to it's subscribers.
 * @function
 * @param { string } topic - The topic to publish
 * @param { any } data - The data to pass to subscribers
 * @return { Boolean } Returns false if there are no subscribers for the given topic
 */
const publish = (topic, data) => {
  return PubSub.publish(topic, data);
};

/**
 * Subscribes the passed function to the given topic.
 * @function
 * @param { string } topic - The topic to subscribe
 * @param { Function } callback The method to call when the given topic is published
 * @return { String } Every returned token is unique and should be stored if you need to unsubscribe
 */
const subscribe = (topic, callback) => {
  return PubSub.subscribe(topic, callback);
};

/**
 * Removes a specific subscription using the token provided which can be obtained while subscribing.
 *
 * @function
 * @param { String } token A token to unsubscribe from
 * @example // Unsubscribing with a token
 * var token = PubSub.subscribe('mytopic', myFunc);
 * PubSub.unsubscribe(token);
 *
 * @return { String } Returns the unsubscribed token
 */
const unsubscribe = (token) => {
  return PubSub.unsubscribe(token);
};

export default {
  publish,
  subscribe,
  unsubscribe
};

// const tellMeTheMeaningOfLife = () => {
//   console.log("Shiggidy Diggidy")
// }
// export default tellMeTheMeaningOfLife;

