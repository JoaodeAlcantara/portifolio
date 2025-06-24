import { useMemo } from 'react';

function Animated() {
    const lines = useMemo(() => {
        return Array.from({ length: 100 }).map((_, i) => {
            const top = `${(i + 1) * 6}%`;
            const delay = `-${Math.random() * 4}s`;
            const duration = `${4 + Math.random() * 4}s`;
            return { id: i, top, delay, duration };
        });
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            {lines.map(({ id, top, delay, duration }) => (
                <span
                    key={id}
                    className="block absolute left-0 h-0.5 w-20 bg-blue-900 opacity-60 rounded animate-slide-horizontal"
                    style={{
                        top,
                        animationDelay: delay,
                        animationDuration: duration,
                    }}
                />
            ))}
        </div>
    );
}

export default Animated