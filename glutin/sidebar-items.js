initSidebarItems({"enum":[["Api","All APIs related to OpenGL that you can possibly get while using glutin."],["ContextError","Error that can happen when manipulating an OpenGL context."],["CreationError","Error that can happen while creating a window or a headless renderer."],["CursorState","Describes how glutin handles the cursor."],["ElementState",""],["Event",""],["GlProfile","Describes the requested OpenGL context profiles."],["GlRequest","Describes the OpenGL API and version that are being requested when a context is created."],["MouseButton",""],["MouseCursor",""],["MouseScrollDelta",""],["NativeMonitorId","Native platform identifier for a monitor. Different platforms use fundamentally different types to represent a monitor ID."],["ReleaseBehavior","The behavior of the driver when you change the current context."],["Robustness","Specifies the tolerance of the OpenGL context to faults. If you accept raw OpenGL commands and/or raw shader code from an untrusted source, you should definitely care about this."],["TouchPhase",""],["VirtualKeyCode",""]],"fn":[["get_available_monitors","Returns the list of all available monitors."],["get_primary_monitor","Returns the primary monitor of the system."]],"mod":[["os","Contains traits with platform-specific methods in them."]],"static":[["GL_CORE","The minimum core profile GL context. Useful for getting the minimum required GL version while still running on OSX, which often forbids the compatibility profile features."]],"struct":[["AvailableMonitorsIter","An iterator for the list of available monitors."],["GlAttributes","Attributes to use when creating an OpenGL context."],["HeadlessContext","Represents a headless OpenGL context."],["HeadlessRendererBuilder","Object that allows you to build headless contexts."],["MonitorId","Identifier for a monitor."],["PixelFormat","Describes a possible format. Unused."],["PixelFormatRequirements","Describes how the backend should choose a pixel format."],["PollEventsIterator","An iterator for the `poll_events` function."],["Touch","Represents touch event"],["WaitEventsIterator","An iterator for the `wait_events` function."],["Window","Represents an OpenGL context and the Window or environment around it."],["WindowAttributes","Attributes to use when creating a window."],["WindowBuilder","Object that allows you to build windows."],["WindowProxy","Represents a thread safe subset of operations that can be called on a window. This structure can be safely cloned and sent between threads."]],"trait":[["GlContext","Trait that describes objects that have access to an OpenGL context."]],"type":[["ScanCode",""]]});