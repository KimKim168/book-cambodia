import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function MyComponent() {
    return (
        <PhotoProvider maskOpacity={0.5}>
            <PhotoView src={`/assets/demo-images/book1.jpg`}>
                <img src={`/assets/demo-images/book1.jpg`} style={{ objectFit: 'cover' }} alt="" />
            </PhotoView>
        </PhotoProvider>
    );
}
