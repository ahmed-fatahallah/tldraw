import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

export default function BasicExample() {
	return (
		<div style={{ height: '100vh', overflow: 'auto' }}>
			<div className="tldraw__editor">
				<Tldraw persistenceKey="tldraw_example" autoFocus />
			</div>
		</div>
	)
}
