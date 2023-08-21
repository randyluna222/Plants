class Publisher {
  constructor(){
    this.susbcribers = [];
  }
  subscribe (fn){
    this.susbcribers.push(fn);
  }

  publish (data){
    this.susbcribers.forEach(fn  => fn (data));
  }
}

export default Publisher;