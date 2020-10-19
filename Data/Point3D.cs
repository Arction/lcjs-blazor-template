namespace lcjs_blazor_template.Data
{
    /// <summary>
    /// Model to represent a point in 3-dimensions (x, y, z).
    /// Used as a workaround since the traditional 
    /// </summary>
    public struct Point3D
    {
        /// <summary>
        /// The x-axis component of this point instance.
        /// </summary>
        public int X { get; set; }

        /// <summary>
        /// The y-axis component of this point instance.
        /// </summary>
        public int Y { get; set; }

        /// <summary>
        /// The z-axis component of this point instance.
        /// </summary>
        public int Z { get; set; }

        /// <summary>
        /// Instantiantiates this instance with the provided x, y and z co-ordinates.
        /// </summary>
        /// <param name="x">The x-axis co-ordinate.</param>
        /// <param name="y">The y-axis co-ordinate.</param>
        /// <param name="z">The z-axis co-ordinate.</param>
        public Point3D(int x, int y, int z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }
    }
}
