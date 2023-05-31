var UndergroundSystem = function() {
    this.avg = new Map();
    this.train = new Map();
};


UndergroundSystem.prototype.checkIn = function(id, start, t) {
    this.train.set(id, [start, t]);
};


UndergroundSystem.prototype.checkOut = function(id, end, t) {
    const [start, s] = this.train.get(id);
    const key = [start, end].join();
    if (this.avg.has(key)) {
        let [avg, cnt] = this.avg.get(key);
        this.avg.set(key, [avg * (cnt/++cnt) + ((t - s)/cnt), cnt]);
    } else {
        this.avg.set(key, [(t - s), 1]);
    }
    this.train.delete(id);
};


UndergroundSystem.prototype.getAverageTime = function(start, end) {
    return this.avg.get([start, end].join())[0];
};