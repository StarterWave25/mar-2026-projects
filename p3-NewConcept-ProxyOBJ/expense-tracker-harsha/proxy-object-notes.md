# **JS PROXY OBJECT NOTES**

## **Why Proxy Object is Used?**

### Proxy Object allows us to create a copy of an Object with Customizable Internal Functionalities.

### We can log the property accesses, validate the values of properties, make side effects and many.


## **How to Create a Proxy Object?**

### Using Proxy() Constructor, we can Create Proxy Objects by passing 2 arguments.
1. **target** - The Object which you want to Proxy
2. **handler** - The Object with Customized Internal Functionalities like get, set.
- The Functions which are declared in the handler object are called **Traps**. They are replacement for corresponding Object internal methods.

### Proxy Objects doesn't have Proxy.prototype. So, its instance don't have any special methods or props.

- **Any Changes to Proxy Object's props also reflect on Original target Object because same reference is used.**


## **What happens when interacting with an Object?**

### Whenever, you interact with an Object, its one of its internal methods are called.

- Ex: Accessing a property of an Object like me.name, calls the Object's internal method or trap **get()**. And it has its own implementation.

### By using Proxy Objects we can change the Object's Internal methods definitions, these Objects are called **Exotic Objects**.