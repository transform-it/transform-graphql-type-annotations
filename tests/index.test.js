import test from 'ava'
import transform from '../src'
import { schema, query } from "./data"

test('should give correct flow annotations', (t) => {
	t.snapshot(transform(schema, query))
})

test('should give correct typescript annotations', t => {
	t.snapshot(transform(schema, query, 'typescript'))
})