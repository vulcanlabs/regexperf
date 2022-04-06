import Benchmark from 'benchmark';
import { Sample } from './test_data.js';
import { angusTake1, angusTake2 } from './test_regexes.js'

const suite = new Benchmark.Suite();

suite
    .add('angus_run_1', function() {
        angusTake1(Sample);        
    })
    .add('angus_run_2', function() {
        angusTake2(Sample)
    })
    .on('cycle', function(event) {
        console.log(String(event.target))
    })
    .on('complete', function() {
        console.log('The fastest method is ' + this.filter('fastest').map('name'))
    })
    .run({ 'async': false });

