import { useEffect, useRef, useState } from "react";
import { Engine, Render, World, Bodies, Runner } from "matter-js";

const Loading = () => {
  const sceneRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });



  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    if (!sceneRef.current || windowSize.width === 0) return;

    const engine = Engine.create();
    const world = engine.world;

    const ballSize = windowSize.width < 768 ? 50 : 90;
    const logoBallSize = 90;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: windowSize.width,
        height: windowSize.height,
        background: "#f9f4e8",
        wireframes: false,
      },
    });

    const logoBall = Bodies.circle(
      windowSize.width / 2,
      windowSize.height / 2,
      logoBallSize,
      {
        isStatic: true,
        render: { fillStyle: "#1f1f1f" },
      }
    );

    const balls = Array.from({ length: 18 }).map((_, i) =>
      Bodies.circle(
        Math.random() * windowSize.width,
        (Math.random() * windowSize.height) / 4 - 100 - i * 100,
        ballSize,
        {
          restitution: 0.7,
          friction: 0.05,
          render: { fillStyle: "#1f1f1f" },
        }
      )
    );

    const ground = Bodies.rectangle(
      windowSize.width / 2,
      windowSize.height + 50,
      windowSize.width,
      100,
      {
        isStatic: true,
        render: { fillStyle: "#1f1f1f" },
      }
    );
    const leftWall = Bodies.rectangle(
      0, // Chap tomonda joylashgan
      windowSize.height / 2,
      10,
      windowSize.height,
      { isStatic: true }
    );

    const rightWall = Bodies.rectangle(
      windowSize.width, // O‘ng tomonda joylashgan
      windowSize.height / 2,
      10,
      windowSize.height,
      { isStatic: true }
    );

    World.add(world, [logoBall, ground, leftWall, rightWall, ...balls]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(world, false);
      render.canvas.remove();
      render.textures = {};
    };
  }, [sceneRef, windowSize]);

  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      ref={sceneRef}
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: windowSize.height / 2 - 12,
          left: windowSize.width / 2 - 50,
          color: "white",
          fontSize: windowSize.width < 768 ? "18px" : "24px",
          fontWeight: "bold",
          textAlign: "center",
          opacity: 1,
          transition: "opacity 2s ease",
        }}
      >
        ApexBart
      </div>
    </div>
  );
};

export default Loading;
